const pathLib = require('path')
var fs = require('fs')

const MIN_COMPONENT_NAME_LENGTH = 3

const BASE_DIRECTORY_PATH = pathLib.join(process.cwd(), 'src')

const COMPONENTS_FOLDER_NAME = 'components'

// Special marker for the "create here" choice
const CREATE_HERE_VALUE = '*'

const TEXTS = {
  createHere: 'Create here 🎯',
  navigateToParent: '../',
  typeOfComponentPromptMessage: 'What kind of component do you want ?\n',
  sectionSpecific: 'Section-specific',
  sectionSpecificHint:
    'Used in one section of the application: inbox, dashboard, XTP, admin, search ...',
  sharedComponents: 'Shared across multiple sections',
  sharedComponentsHint:
    'Section-specific, but used in more than one section of the application',
  atomicDesignComponent: 'Application building blocks',
  atomicDesignComponentHint:
    'Atoms, molecules, organisms. Not tighted up to specific sections of the application.',
  pathPromptMessage: 'select folder:',
  pathConfirmation: 'Your component will be created in:',
  namePromptMessage: "What's your component name ?"
}

const pascalize = (str = '') =>
  str
    .replace(/[^a-zA-Z0-9]/g, '')
    .replace(/^[0-9]+/, '')
    .replace(/^(.)/, firstChar => firstChar.toUpperCase())

const isComponentFolder = name => {
  const firstChar = name[0]
  return firstChar.toUpperCase() === firstChar
}

const getParentPath = (currentPath, depth = 1) => {
  if (currentPath === BASE_DIRECTORY_PATH) {
    return BASE_DIRECTORY_PATH
  }
  let parentPath = currentPath
  for (let i = 0; i < depth; i++) {
    parentPath = pathLib.dirname(parentPath)
  }
  return parentPath
}

const getPathRelativeToBase = path =>
  `src/${pathLib.relative(BASE_DIRECTORY_PATH, path)}`

const getChoicesForFolderPrompt = (path, { depth = 1 } = {}) => {
  const isReactComponentFolder = isComponentFolder(pathLib.basename(path))

  let subFolders = fs
    .readdirSync(path)
    .map(name => ({
      path: pathLib.join(path, name),
      name
    }))
    .filter(item => fs.statSync(item.path).isDirectory())

  if (isReactComponentFolder) {
    subFolders = subFolders.filter(
      subFolder =>
        isComponentFolder(subFolder.name) ||
        subFolder.name === COMPONENTS_FOLDER_NAME
    )

    if (
      subFolders.length === 1 &&
      subFolders[0].name === COMPONENTS_FOLDER_NAME
    ) {
      return getChoicesForFolderPrompt(
        pathLib.join(path, COMPONENTS_FOLDER_NAME),
        {
          depth: depth + 1
        }
      )
    }
  }

  return [
    {
      message: TEXTS.navigateToParent,
      name: getParentPath(path, depth)
    },
    {
      message: TEXTS.createHere,
      name: CREATE_HERE_VALUE,
      hint: `  📁 ${getPathRelativeToBase(path)}`
    },
    ...subFolders.map(subFolder => ({
      name: subFolder.path,
      message: `📁  ${subFolder.name}`
    }))
  ]
}

const showFolderPrompter = async (fullPath, prompter) => {
  console.log(fullPath)
  const { selectedFolder } = await prompter.prompt({
    type: 'autocomplete',
    name: 'selectedFolder',
    message: TEXTS.pathPromptMessage,
    choices: getChoicesForFolderPrompt(fullPath)
  })

  return {
    selectedFolder
  }
}

module.exports = {
  prompt: async ({ prompter }) => {
    let selectedPath = BASE_DIRECTORY_PATH
    let currentPath

    do {
      console.clear()
      currentPath = selectedPath
      selectedPath = (await showFolderPrompter(currentPath, prompter))
        .selectedFolder
    } while (selectedPath !== CREATE_HERE_VALUE)

    selectedPath = currentPath
    if (isComponentFolder(pathLib.basename(selectedPath))) {
      selectedPath = pathLib.join(selectedPath, COMPONENTS_FOLDER_NAME)
    }

    console.clear()
    console.log(TEXTS.pathConfirmation)
    console.log(`📁  ${getPathRelativeToBase(selectedPath)}\n`)

    const { name } = await prompter.prompt({
      type: 'input',
      name: 'name',
      message: TEXTS.namePromptMessage,
      format: value => pascalize(value),
      result: value => pascalize(value),
      validate: value => {
        return value && value.length >= MIN_COMPONENT_NAME_LENGTH
      }
    })

    return { path: selectedPath, name }
  }
}
