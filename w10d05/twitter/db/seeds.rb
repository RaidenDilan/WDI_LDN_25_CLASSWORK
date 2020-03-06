u1 = User.create!(username: "alex", firstname: "Alex", lastname: "Chin")
u2 = User.create!(username: "mike", firstname: "Mike", lastname: "Hayden")
u3 = User.create!(username: "rane", firstname: "Rane", lastname: "Gowan")

u1.posts.create!(body: "I bet we could stick angular ontop of this API...")
u2.posts.create!(body: "This is quite fast to make a quick API!")
u1.posts.create!(body: "This could be a fun stack for a final project?")
u3.posts.create!(body: "I like using Rails!")
