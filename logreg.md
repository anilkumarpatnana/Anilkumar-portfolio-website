Update EC2 IP Address, Rebuild and Restart Portfolio

Use these steps whenever your AWS EC2 public IP address changes.

1. Find the New EC2 Public IP

Run:

curl -s http://checkip.amazonaws.com


Example result:

12.34.56.78


Use your actual IP address wherever 12.34.56.78 appears below.

2. Go to the Project Directory
cd /home/ec2-user/Anilkumar-portfolio-website

3. Update Login.jsx

Run:

sed -i 's#http://54.205.196.244:8000#http://12.34.56.78:8000#g' frontend/src/pages/Login.jsx


Replace 12.34.56.78 with your new EC2 IP.

4. Update Register.jsx

Run:

sed -i 's#http://54.205.196.244:8000#http://12.34.56.78:8000#g' frontend/src/pages/Register.jsx


Again, replace 12.34.56.78 with your actual IP.

5. Verify Both Files

Run:

grep -n "API_URL" frontend/src/pages/Login.jsx frontend/src/pages/Register.jsx


Confirm that both files point to your new IP.

For example:

const API_URL =
  process.env.REACT_APP_API_URL || "http://12.34.56.78:8000";

6. Check for Other References to the Old IP

Run:

grep -R "54.205.196.244" frontend/src --exclude-dir=node_modules


If there is no output, the old IP is no longer referenced in frontend/src.

If other files are shown, check them before changing anything.

7. Build the Frontend

Run:

cd /home/ec2-user/Anilkumar-portfolio-website/frontend
npm run build


Wait for:

Compiled successfully

8. Start the Backend

Open another terminal and run:

cd /home/ec2-user/Anilkumar-portfolio-website/backend
source ../venv/bin/activate
uvicorn server:app --host 0.0.0.0 --port 8000


The backend should listen on:

0.0.0.0:8000

9. Start the Frontend

For the current development setup:

cd /home/ec2-user/Anilkumar-portfolio-website/frontend
npm start


Wait for:

webpack compiled successfully

10. Open the Website

Use your new EC2 IP:

http://YOUR-NEW-IP:3000


Example:

http://12.34.56.78:3000

11. Test the Complete Flow

Test these in order:

Login
  ↓
Portfolio
  ↓
Logout
  ↓
Login
  ↓
Register
  ↓
Create Account
  ↓
Login with the new account
  ↓
Portfolio

Important Notes

Do not change:

MongoDB connection details
MongoDB users
Passwords
backend/.env

A change to the EC2 public IP does not change your MongoDB users or your application code.

Your .env file should remain on the EC2 server and should stay excluded from Git.

Quick Version

When the EC2 IP changes:

cd /home/ec2-user/Anilkumar-portfolio-website

curl -s http://checkip.amazonaws.com

sed -i 's#http://OLD-IP:8000#http://NEW-IP:8000#g' frontend/src/pages/Login.jsx
sed -i 's#http://OLD-IP:8000#http://NEW-IP:8000#g' frontend/src/pages/Register.jsx

cd frontend
npm run build
npm start


Start the backend separately:

cd /home/ec2-user/Anilkumar-portfolio-website/backend
source ../venv/bin/activate
uvicorn server:app --host 0.0.0.0 --port 8000
