# angular-phonecat-e2e
e2e tests using protractor/cypress/pupetter for the angular phonecat demo application

#To run the app
Run the following commands from the root folder
`npm install`    
`npm start`    
This starts the application on http://localhost:8000

#To run the tests using the protractor
`cd test`    
`npm install`    
`gulp e2eSetup`    
`gulp e2e`    

####To specify a different browser
`browser=chrome gulp e2e`

####After running reports can find at test/output/DD-MMM-YYY*/index.html


#To run the tests using the cypress
`cd test-cypres`    
`npm install`   
`npm run-script cypress`        

####To specify a different browser
`cypress run --browser=chrome`

####After running reports can find at test-cypress/cypress/reports/full_report.html


