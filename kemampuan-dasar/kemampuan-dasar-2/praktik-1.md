  ```
    ~/Documents    master ?6                                        16:30:53 
❯ mkdir rhymes
    ~/Documents    master ?6                                        16:31:15 
❯ cd rhymes
    ~/Documents/rhymes    master ?6                                 16:31:18 
❯ git init
Initialized empty Git repository in /Users/diko/Documents/rhymes/.git/
    ~/Documents/rhymes    master                                    16:31:21 
❯ touch README.md
    ~/Documents/rhymes    master ?1                                 16:31:39 
❯ git add README.md
    ~/Documents/rhymes    master +1                                 16:31:44 
❯ git commit -m "First commit."
[master (root-commit) 22b7e6a] First commit.
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 README.md
    ~/Documents/rhymes    master                                    16:31:57 
❯ git status
On branch master
nothing to commit, working tree clean
    ~/Documents/rhymes    master                                    16:32:03 
❯ git diff
    ~/Documents/rhymes    master                                    16:32:10 
❯ code .
    ~/Documents/rhymes    master                                    16:32:25 
❯ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")
    ~/Documents/rhymes    master !1                                 16:32:59 
❯ git diff
    ~/Documents/rhymes    master !1                          5s   16:33:09 
❯ git add README.md
    ~/Documents/rhymes    master +1                                 16:33:14 
❯ git commit -m 'Added project overview'
[master 49fde82] Added project overview
 1 file changed, 3 insertions(+)
    ~/Documents/rhymes    master                                    16:33:29 
❯ wget https://www.acquia.com/sites/default/files/blog/all-around-the-mulberry-bush.txt
wget https://www.acquia.com/sites/default/files/blog/jack-and-jill.txt
wget https://www.acquia.com/sites/default/files/blog/old-mother-hubbard.txt
wget https://www.acquia.com/sites/default/files/blog/twinkle-twinkle.txt
wget https://www.acquia.com/sites/default/files/blog/hokey-pokey.txt
--2020-10-30 16:33:42--  https://www.acquia.com/sites/default/files/blog/all-around-the-mulberry-bush.txt
Resolving www.acquia.com (www.acquia.com)... 104.16.117.45, 104.16.118.45
Connecting to www.acquia.com (www.acquia.com)|104.16.117.45|:443... connected.
HTTP request sent, awaiting response... 404 Not Found
2020-10-30 16:33:43 ERROR 404: Not Found.

--2020-10-30 16:33:43--  https://www.acquia.com/sites/default/files/blog/jack-and-jill.txt
Resolving www.acquia.com (www.acquia.com)... 104.16.117.45, 104.16.118.45
Connecting to www.acquia.com (www.acquia.com)|104.16.117.45|:443... connected.
HTTP request sent, awaiting response... 404 Not Found
2020-10-30 16:33:43 ERROR 404: Not Found.

--2020-10-30 16:33:43--  https://www.acquia.com/sites/default/files/blog/old-mother-hubbard.txt
Resolving www.acquia.com (www.acquia.com)... 104.16.117.45, 104.16.118.45
Connecting to www.acquia.com (www.acquia.com)|104.16.117.45|:443... connected.
HTTP request sent, awaiting response... 404 Not Found
2020-10-30 16:33:44 ERROR 404: Not Found.

--2020-10-30 16:33:44--  https://www.acquia.com/sites/default/files/blog/twinkle-twinkle.txt
Resolving www.acquia.com (www.acquia.com)... 104.16.117.45, 104.16.118.45
Connecting to www.acquia.com (www.acquia.com)|104.16.117.45|:443... connected.
HTTP request sent, awaiting response... 404 Not Found
2020-10-30 16:33:45 ERROR 404: Not Found.

--2020-10-30 16:33:45--  https://www.acquia.com/sites/default/files/blog/hokey-pokey.txt
Resolving www.acquia.com (www.acquia.com)... 104.16.117.45, 104.16.118.45
Connecting to www.acquia.com (www.acquia.com)|104.16.117.45|:443... connected.
HTTP request sent, awaiting response... 404 Not Found
2020-10-30 16:33:45 ERROR 404: Not Found.

    ~/Documents/rhymes    master                             3s   16:33:45 
❯ git status
On branch master
nothing to commit, working tree clean
    ~/Documents/rhymes    master                                    16:33:50 
❯ ls
README.md
    ~/Documents/rhymes    master                                    16:33:53 
❯ git remote add origin https://github.com/ddikodroid/rhymes.git
    ~/Documents/rhymes    master                                    16:35:24 
❯ git push -u origin master
Counting objects: 6, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (6/6), 528 bytes | 264.00 KiB/s, done.
Total 6 (delta 0), reused 0 (delta 0)
To https://github.com/ddikodroid/rhymes.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.
 ```