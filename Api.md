###Posts Routes

`/api/get/allposts`: retrieves  all our posts from the database.  ORDER BY date_created DESC allows us to have the newest posts displayed first.

`/api/post/posttodb`: Saves a user post to the database. We save the 4 values we need: title, body, user id, username to an array of values.

`/api/put/post`: Edits a existing post in the database.  We use the SQL UPDATE   command and pass in all the values of the post again. We look up the post with the post id which we get from our front end.

`/api/delete/postcomments`: Deletes all the comments associated with a post. Because of PSQL’s foreign  key constraint, we have to delete all the comments associated with the post before we can delete the actual post.

`/api/delete/post`: Deletes a post with the post id.

`/api/put/likes`: We make a put request to add the user id of the user who liked the post to the like_user_id array then we increase the likes count by 1.

###Comments Routes

`/api/post/commenttodb`: Saves a comment to the database

`/api/put/commenttodb`: edits an existing comment in the database

`/api/delete/comment`: Deletes a single comment, this is different from deleting all the comments associated with a post.

`/api/get/allpostcomments`: Retrieves all the comments associated with a single post

###User Routes

`/api/posts/userprofiletodb`: Saves a user profile data from auth0 to our own database. If the user already exists PostgreSQL does nothing.

`/api/get/userprofilefromdb`: Retrieves a user by looking up their email

`/api/get/userposts`: retrieves posts made by a user by looking up all posts that matches their user id.

`/api/get/otheruserprofilefromdb`: get another users profile data from the database and view on their profile page.

`/api/get/otheruserposts`: Get another users posts when you view their profile page
