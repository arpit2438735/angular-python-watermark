# Install prerequisite

- Install pip
       - For Ubuntu
            `sudo apt-get -y install python-pip`
       - For Mac
            `brew install python` will also install pip make sure you installed using brew
- Install env
       - `pip install virtualenv`

# Install app in your env

- Type `virtualenv <folder-name-optional>` in this folder
- Type `pip install -r requirement.txt`
- Type `source bin/activate`
- Navigate to `assignment/assignment/static` and type `bower install` //Assuming you have bower install in your system using npm package

# Run Python Server

- Type `gunicorn assignment.assignment.wsgi`
- Type `127.0.0.1:8000` on your browser

# Refactor

- Remove one deep `assignment` folder and move all code to upper level
- Use of grunt task in `production` to create UI build
- Remove all `bower` dependency file inside scripts.Need to check heroku deploy bower app