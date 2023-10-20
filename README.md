# ledgrid

TODO
* CSS for d pad
* possibly consolidate emits for controller buttons to 1 for down and 1 for up with data for which button was pressed
* create grid on board
* create basic block on board so it can move around


Set up venv
```
python -m venv c:\path\to\myenv
```

Activate venv
```
source c:\path\to\myenv\Scripts\activate
```
Note: In windows on Visual Studio Code, you may need to allow powershell to run scripts by opening powershell as an administrator and running the following command and typing A (Yes to All)
```
set-executionpolicy remotesigned
```

Install requirements
```
python -m pip install -r requirements.txt
```

Run Flask app
```
flask --app <appName> run
```

