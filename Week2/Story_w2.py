# let the user know what's going on
print ("Answer the questions below to play.")
print ("-----------------------------------")

# variables containing all of your story info
girlname = raw_input("Enter a girl's name: ")
adjective1 = raw_input ("Enter 'quiet' or 'fresh air': ")
name2 = raw_input("Enter your friend's name: ")
familymembers = raw_input("Enter family member(s) (parents, uncle,...) or pet(s): ")
place = raw_input("An Asian country: ")
verb_ing = raw_input("A verb followed by -ing: ")
adjective2 = raw_input("An adjective that describes noise: ")
noun = raw_input("What makes noise: ")
weapon = raw_input("A weapon you can find in your bedroom: ")

# this is the story. 

story = girlname + " liked the " + adjective1 + ". Which was why she wished she were back in home with her " + familymembers + " back in " + place + ", her cousin " + name2 + " was " + verb_ing + " very " + adjective2 + " on the top bunk of the beds. She tried to block out " + noun + ", but he seemed to be getting louder, and louder. Having enough of this, " + girlname + " grabbed her " + weapon + " and climbed up with it. "

# finally we print the story
print (story)
