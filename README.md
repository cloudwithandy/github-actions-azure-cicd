# github-actions-azure-cicd
CI/CD pipeline using Github Actions to automatically deploy updates to Azure on every push. 

Azure CI/CD Pipeline – Node.js Web App Deployment
Overview

This project demonstrates a complete CI/CD pipeline using GitHub Actions to build and deploy a Node.js application to Microsoft Azure Web App. The workflow reflects a real-world DevOps process including setup, failure, debugging, and successful deployment.

Objectives
Build a CI/CD pipeline using GitHub Actions
Deploy a Node.js application to Azure Web App
Automate build and deployment
Troubleshoot and resolve pipeline errors
Technologies Used
Microsoft Azure (App Service)
GitHub Actions (CI/CD)
Node.js
Git & GitHub



Step 1 – Repository Setup
initial project repository created with application files.

![Step 1](screenshots/01-create-index-file.png)


Step 2 - Project structure 
Local development environment with core files (server.js, package.json, workflow files).

![Step 2](screenshots/02-repo-with-files.png)

Step 3 - Initial commit 
Project pushed to Github to trigger pipeline

![Step 3](screenshots/03-deployment-success.png)

Step 4 - Repository Files 
Verification of repository contents on Github.

![Step 4](screenshots/04-webapp-overview.png)

Step 5 - CI/CD Pipeline Setup
Github Actions workflow configured for build and deployment.

![Step 5](screenshots/05-deployment-center-configured.png)

Step 6 - Pipeline Execution (Running)
Pipeline triggered automatically after commit

![Step 6](screenshots/06-deployment-failed-log.png)

Step 7 - Pipeline Failure
Initial pipeline execution failed due to configuration issues.

![Step 7](screenshots/07-github-actions-failure.png)

Step 8 - Debuuging the issue 
Logs reviewed to identify JSON parsing error in package.json

![Step 8](screenshots/08-package-json-added.png)

Step 9 - Fix Applied
Configuration corrected to resolve pipeline error

![Step 9](screenshots/09-github-actions-success.png)

Step 10 - Re-run Pipeline
Pipeline re triggrered after applying fixes.

![Step 10](screenshots/10-azure-deployment-success.png)

Step 11 - Pipeline Progress 
Pipeline executing successsfully through build stages.

![Step 11](screenshots/11-Live-app-error.png)

Step 12 - Successsful Build 
Pipeline completed successfully with all steps passing.

![Step 12](screenshots/12-server-js-added.png)

Step 13 - workflow Details 
Detailed view showing all jobs completed successfully

![Step 13](screenshots/13-github-actions-success-pipeline.png)

Step 14 - Azure Deployment 
Application deployed to the Azure web app and running 

![Step 14](screenshots/14-azure-webapp-running.png)

Step 15 - Live Application 
Final validation showing the application running in the browser.

![Step 15](screenshots/15-live-app-running.png)



Key Achievements - 
 Implemented a full CI/CD pipeline using Github Actions.
 Automated deployments to Azure Web App
 Diagnosed and resolved pipeline failures 
 Successfully deployed and verified a live cloud hosted application

 Conclusion 
 This project demonstrates hands-on experience with CI/CD, Cloud deployment, and troubleshooting. It reflects the ability to take an application from the initial setup through debugging to a fully deployed production-ready state
