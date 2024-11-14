# Qwest docs

This project holds the documentation for the Qwest project, using [Docusaurus](https://docusaurus.io/).

## Contributor guide
There are a few simple guidelines that you have to follow for contributing to this project.

### Contribution guidelines
You can contribute to this project in many ways. You can file an issue and let us know about any bugs, typos, or improvements. You can also fork this project, implement the changes, and submit a pull request.

### Code style and structure
We are using [Microsoft's writing style guide](https://learn.microsoft.com/en-us/style-guide/welcome/) to write our English documentation.  
🚧 We are still working on our Persian writing style guide.

### Development environment setup
1. Install [NodeJS LTS](https://nodejs.org/en)
2. Clone this repository
3. While inside this repository on your local machine, execute the `npm i` command
4. To start a local development server to view the changes in a browser window, execute the `npm run start` command

### Branching, pull requests, and commit message

For the changes you want to make, create a branch with the following naming convention: `<github-username>/[docs|diagrams]/<document-name>`.  

Examples:
- `atareversei/diagrams/erd`
- `thisis-mahyar/docs/trello`

For commit messages use the convention of `git commit -m "[docs|diagrams|fix|feat|ci|refactor](<feature>): <description> <#issue-number>"`

Examples:
- `docs(trello): add summary`
- `docs(problem-statements,target-audience): fix typos`
- `diagrams(erd): add new entities`
- `ci: fix broken pipeline`
- `feat(homepage): add new about us section`
- `fix: type issues breaking build`

After you are done with making changes, submit a pull request to the `main` branch and ask for a `qwest-core` team member to review the changes.

### Testing
Before you ask for a review, make sure that your project can be built by using the `npm run build` command.

