I learned how to use the ```git push```and ```git pull``` commands to store files in the cloud (on GitHub) and to pull them to my local machine.

I also figured out that merge conflicts suck and that I should only be editing / creating files in one place at a time.

I got an elastic IP address (50.16.107.84) to use with my running server, which means it saves an IP address for it even if I shut it down and restart it later. My .pem file (that allows me to access my server through SSH) is on my computer and I will need it to do so. 

To SSH into my server, I do this command in my console:

```ssh -i [insert my .pem file here] ubuntu@50.16.107.84```


Notes for midterm
- \# is for an Id
- . is for a class
- CSS box:
   Content (actual stuff), padding (space between content and border), border (colored bit surrounding padding), margin ("elbow room" outside of border between the item and any neighbors
- You need a certificate on your website to allow HTTPS
- Port 443: a port computers use to divert network traffic
- Switch statement syntax:
  
  switch(expression) {
  case x:
    break;
  case y:
    break;
  default:

}

- Website : https://photos.example.org
  - "photos" is a subdomain
  - "example" is the domain name
  - "org" is the top-level domain
  - "example.org" is the root domain
 
- div p	Selects all p elements inside div elements
- p ~ ul	Selects every ul element that is preceded by a p element
- div + p	Selects the first p element that is placed immediately after div elements
- div > p	Selects all p elements where the parent is a div element

- Default displays
  - Span : none
  - P : block
  - Div : block
 
- Other HTML things
  - Ordered list: ol
  - Unordered list : li
  - Headings : h1 (first leve) ... h6 (sixth and lowest level)
  - Setting doctype: <!DOCTYPE html> (must be done at top of every HTML doc)
  - Images : <img src="example.jpeg"">


From making my service, I saw how useful a service can be. I thought that doing this was unnecessary (it worked just fine before after all!), but having a central location where we can store information to dole out to other pages is extremely useful, and the next phase, the database, should make this even more useful.
