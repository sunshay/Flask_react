from flask import Flask,render_template,request

# define object
app = Flask(__name__)

# define route 
@app.route("/members")
def members():
    # return a Json array
    return {"member": ["Member1", "Member2", "Member3"]} 


# actualise page 
if __name__ == "__main__":
    app.run(debug=True) #debug=True because we are in development mode 

    

# 3.go to App.js, erase everything , and type "rfc + tab"
#  add useState and UseEffect
# 4. cd client ; npm start ( will open a web page :3000)
# 5.create a state variable "Data" then fetch this bckend api with a json data response 