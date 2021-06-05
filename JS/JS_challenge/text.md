# Wcat

it is used to display or make a copy content of one or more files in terminal

## Commands:
1- wcat filepath => displays content of the file in the terminal
2-wcat filepath1 filepath2 filepath3...=> displays content of all files in the terminal (contactinate form) in the given order.

3- wcat -s filepath=> convert big line breaks into a singulat line break
4-wcat-n filepath => give numbering to all lines

5- wcat -b filepath => give numbering to non empty lines
6- wcat filepath > filenamepath => put all the content of filename into filename2 by overriding and also creates it it doesnt exist

7- wcat filename2path >> filename2path  =>  append all the content of filename into filename2
8- node wcat -s filename > filename 2=> get the file content of filename remove large spaces and save output in filename2

we can mix and match the options

## Edge cases
1- if file entered is not found then it gives file does not exist error
2- -n and -b are 2 options available together then command should give you a error