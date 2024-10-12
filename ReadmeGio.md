## Install Ant Design

1. First, you need to install the Ant Design core library and the related style dependencies:

```bash
npm install antd
```

2. Install Ant Design Icons (Optional)

If you plan to use icons (like in the login form for username/password icons), you should also install the @ant-design/icons package:

```bash
npm install @ant-design/icons
```

3. Import Ant Design Styles
   You need to import the Ant Design styles (CSS) globally in your project. Typically, you would add this in your main entry file (e.g., index.tsx or App.tsx):

```bash
import 'antd/dist/reset.css';
```

## React Router Implementation

`npm install react-router-dom`

## Working on Github Branches

```bash
# Create and switch to new branch
git checkout -b modal-feature

# Add and commit your changes
git add .
git commit -m "Added modal feature"

# (Optional) Push the branch to remote
git push origin modal-feature

# Switch back to main branch
git checkout main

# Merge modal-feature branch into main
git merge modal-feature

# Push the merged changes to remote
git push origin main
```

## installed

```bash
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion~~~
```

## User Profile Update

# Frontend-Only Application (Local Changes):

1. If your app is running purely on the frontend (without a server backend), you can't persist the changes directly in the profileData.json file because frontend code doesn't have write access to the local file system.
2. In this case, you can simulate changes within the application by updating the state, but these changes won't be saved to profileData.json permanently.
