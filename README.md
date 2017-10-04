# wcw-oss-practice

## Welcome!
Today we are going to learn the basics of collaborating on an open source
repository. We are going to keep it simple, and also get some practice with
algorithms and data-structures, which aid us in problem solving and are great
for interview prep.  

#### Here's a few things you will need to begin work:
- Node installed globally
- Text editor (atom)
- Terminal interface (iTerm)
  - bonus: ohmyz.sh to make your terminal easier to read
    - run this script in your terminal: `sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"`
- Git installed globally
- Github account


#### Getting Started
First I am going to simply list the steps in bullet points and the below I have
a more detailed description of what these steps are doing. Consider the first
part the TL;DR  

FIRST: Check out the files called `algorithmsSpecs.md` and `dataStructuresSpecs.md` to see what the options are for you to work on today. All algorithms and data-structure specs should be detailed in their respective `.md` file. Just look over at first and revisit later when you are ready to choose one. Ask for help if you need it to determine what's appropriate for your skill level. 

THEN:

1. Go [here](https://github.com/DianaVashti/wcw-oss-practice) and `fork` the repository.
  - hint: it's the upper right corner of the page.
2. You should have been redirected to what looks like the same repository but if you notice the URL now says `https://github.com/YOUR_GITHUB_HANDLE/wcw-oss-practice` instead of `https://github.com/DianaVashti/wcw-oss-practice`. This means you forked it, yay!
3. On this page there is a button that says `Clone or download`. Click that button and it will open a small modal that says `Clone with HTTPS` with a URL below. Copy that URL (you can click the little clipboard icon next to the URL to auto-copy it).
4. Open your terminal and navigate to the folder you wish to store this repository on your machine.
    - hint: the terminal command `cd` will change directories(aka folders). The command 'ls' will list all files or directories in whichever directory you are currently at. The command `mkdir <name_of_new_directory>` makes a new directory.
5. Once you are in the directory you want to save this project, run the command `git clone <paste the url you copied >`. Once it's finished loading your `fork` use `cd wcw-oss-practice` to navigate to this repository you just cloned.
6. You are now in your fork! If you use atom as your text editor, you can run the command `atom .` (the period is important) to open atom with this project loaded. If you use another text editor you may have to look up the command to do this behavior.
7. run the command `npm i` in your terminal to install all the dependencies this project uses.
8. run this command to add a remote pointing to the original repository so the manager of this project can add the code you are contributing with ease: `git add remote upstream https://github.com/DianaVashti/wcw-oss-practice`
9. run this command: `git remote -v` in your terminal. You should see four lines, two called `origin` (one with the word `push` at the end, and one with the word `fetch` at the end) and two called `upstream` with the same key words at the end as `origin`.
10. You are now ready to begin work...almost.
11. Some projects include whats called a contributing guide which is basically the repository owners guidelines for how they like you to format your contributions. I am going to skip a lot of the finer details here but the main key things to check out is how they like their branches named and how to claim an `issue`.
    - Issues are found [here](https://github.com/DianaVashti/wcw-oss-practice/issues).
      - Each algorithm or data-structure you will be working on has an issue number. Take note of what the issue number for your work is.
    - For this project I want you to name your branch after the algorithm or data-structure you are working on as well as the issue number using this syntax. `issue#-issueName`. Example: If you are working on the `linked list` data structure, which is `issue #2` on the list linked above, your branch should be named `2-linkedList`. Please camelCase multi-word issue names.
12. To do what I describe in item `11` using the example of linkedList, run this command in your terminal: `git checkout -b 2-linkedList`. This will change the current branch you are working on from `master` to `2-linkedList`(never work on master, if you push from master it automatically merges to master, scary. We create branches so we can do some work, push it to github, then have a chance to review that work before merging to to the master codebase!)
13. Now we are ready to start work! The next section will explain how to work with this specific codebase.

##### More detailed version of the steps above: skip to next section if you are ready to start working on your issue.
Since we are going to be working with a repo you do not manage the first step
is going to be to `fork` the repo you want to contribute to. This allows you
to create a copy that is all yours. Your work on your `fork` remains on your
own local computer and you can edit and even break your version ('fork') of
this codebase without changing the original version. There are a few git
keywords we use to review to the relationship between your `fork` and the
original repo:  
- upstream: this is how we refer to the original repo
- origin: this is how we refer to your `fork`  

These two keyword git utilizes as a concept called a `remote`. Remotes allow us
to track both other forked versions, as well as the original version. When you
`fork` a repository, the next step you will usually do is `clone` your `fork`
so that you can begin work on your machine with the codebase. Cloning your
`fork` creates the git repository on your machine and automatically creates
a `remote` with the name `origin` for you. This means that if you used the git
command `push` to send your work to your version of this repository (aka your
`fork`) it automatically points at your version. You can check this by running
the terminal command `git remote -v` which will list all remotes you have
defined. Remember, `origin` was auto-generated for you. To link your work to the
original repository you are trying to contribute you, you need to create a new
`remote` called `upstream` which points at the original repository, not your
`fork`. The terminal command for this would be:  
`git add remote upstream <link to the original repository>`  

You can add more remotes, if for example, you also wanted to be able to `push`
or `pull` code from other contributors and their `fork`.  
The syntax is:  
`git add remote <your custom name for this remote> <link to their fork>`  
This may seem like a lot but we will practice 😉    

#### How to start your work  
The repo you have forked and cloned and set up has all the files with test files for all the algorithms and data-structures but you are only going to work on a one or small few. Here are the steps:
1. In your text editor find the folder corresponding to which type of problem you are working on (algorithm or data-structures), and click that folder to expand it's contents. Each contains two folders, one called `src` and one called `test`. Find the file in the `test` folder named after the problem you are working on and uncomment all the code (command+a to select all, then command+/ to comment/uncomment code).
2. Open the `src` folder and find the file corresponding to your problem. Here is where you will add your code.
3. To test your work, run one of these commands in your terminal depending on if you are working on a data-structure or an algorithm. If all tests pass, you solved it!
  - algorithms: `npm run test:algorithms`
  - data-structures: `npm run test:data`

###### hint if you are working on a data-strcuture:
- Data structures each contain several methods. You should work on one method at a time. To test only that method go in to the test file for your data-structure and add `.only` to the after the word `context` for the specific method you are working on. This will only run that specific test when you run the test command in your terminal. Remember to remove that `.only` flag after you solve it and add it to the next one you are working with. To run all your tests make sure no `.only`'s are left over in your code.
- Here's an example of what that would look like:
```
context.only('insert()', () => {
  it('adds a new node to the linked list when empty', () => {
    const myLinkedList = new LinkedList()
    myLinkedList.insert("Azazel")
    expect(myLinkedList.size()).to.eql(1)
  })
  it('adds new node to the end if list is not empty', () => {
    const myLinkedList = new LinkedList()
    myLinkedList.insert("Azazel")
    myLinkedList.insert("Beelzebub")
    expect(myLinkedList.size()).to.eql(2)
    expect(myLinkedList.getHeadNode()).to.eql({data: "Azazel", next:
      {data: "Beelzebub", next: null}})
  })
})
```
#### So you solved your issue! What next?
Yay, all your tests pass! You are ready to submit your code. Here are the steps:
1. Run the command `git status` in your terminal to see what files you have edited (it should only be two, the test file, and the src file for your issue)
2. right-click the src file where you did your work and click `duplicate` and add `_<yourName>` to the duplicate file. The run the terminal command `git checkout <name of test file> <name of original sec file (not your new duplicate>)`
  - (This is specific to this meetup and not standard contribution behavior. I am doing this so multiple of you can work on the same algorithm or data-structure)
3. Run `git status` and you should see only one file listed in your terminal, the duplicate you made.
4. In your terminal run the command `git add -p` and the terminal will show you the code you have written. If it looks right to you, type `y` (for yes) and hit `enter` on your keyboard. Repeat until it stops prompting your with your code.
5. Run in your terminal `git commit -m "<add a concise message saying which algorithm or data-structure you just solved>"`
6. Run the command `git push`
  - if it responds with something like this: ```fatal: The current branch addingDocumentationAndSpecs has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin addingDocumentationAndSpecs ```
    copy this part `git push --set-upstream origin addingDocumentationAndSpecs` and run that in the terminal.
7. CONGRATS! You just pushed up your first contribution. Because you set your upstream to my original repo I will see that you pushed up a branch and I can review it, and it I don't see any bugs or issues, I can merge it in to the main codebase and you will get credit for contributing on your Github account!!! How cool is that!!!
8. To persist your work locally, you can go to the url of your `fork` of this repo, open a pull request and merge your code in to your own fork's master.
9. The final step is run `git checkout` to go back to master and choose a new issue and repeat this whole process again!!!


#### Potential git bugs:
- configuring git:
  how to configure your machine to know you are the user connected to your own
  Github account:
  - `git config --global user.<whoami> "My Name"``
  - `git config --global user.<my email>  <My email>`
