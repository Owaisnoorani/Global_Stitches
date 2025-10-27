# 🚀 Vercel Deployment Guide - Global Stitches

## 📋 Overview

Your project has **TWO parts** that need to be deployed separately:
1. **Frontend** (React/Vite app) - Main website
2. **Backend** (Express server) - API for reviews and orders

---

## 🎯 Step-by-Step Deployment

### Part 1: Deploy Backend (API Server)

#### Step 1: Create New Vercel Project for Backend

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New"** → **"Project"**
3. Import your GitHub repository (or upload the `server` folder)
4. **Important**: Set the **Root Directory** to `server`

#### Step 2: Configure Backend Project

**Project Settings:**
- **Framework Preset**: Other
- **Root Directory**: `server`
- **Build Command**: (leave empty)
- **Output Directory**: (leave empty)

#### Step 3: Add Environment Variables

In Vercel project settings → Environment Variables, add:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
PORT=5000
```

**Note**: For Gmail, you need to use an [App Password](https://support.google.com/accounts/answer/185833)

#### Step 4: Deploy Backend

Click **"Deploy"** and wait for deployment to complete.

**Copy the deployed URL**, for example:
```
https://global-stitches-backend.vercel.app
```

---

### Part 2: Deploy Frontend (Main Website)

#### Step 1: Create New Vercel Project for Frontend

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New"** → **"Project"**
3. Import your GitHub repository
4. **Important**: Set the **Root Directory** to `/` (root)

#### Step 2: Configure Frontend Project

**Project Settings:**
- **Framework Preset**: Vite
- **Root Directory**: `/` (root)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

#### Step 3: Add Environment Variables

In Vercel project settings → Environment Variables, add:

```
VITE_API_URL=https://global-stitches-backend.vercel.app
```

**Replace with your actual backend URL from Part 1!**

#### Step 4: Deploy Frontend

Click **"Deploy"** and wait for deployment to complete.

---

## ✅ Verification

After both deployments are complete:

1. **Visit your frontend URL** (e.g., `https://global-stitches.vercel.app`)
2. **Go to any product page**
3. **Try submitting a review**
4. ✅ Should work without errors!

---

## 🔧 Alternative: Single Vercel Project (Simpler)

If you want to deploy everything in one project:

### Option A: Serverless Functions

1. Move backend code to `api` folder
2. Convert routes to serverless functions
3. Deploy as single Vercel project

### Option B: Disable Backend Features (Temporary)

If you don't need reviews/orders right now, you can disable them:

**In `ProductDetail.jsx`:**
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Show success without backend
  setSubmitted(true);
  setComment("");
  setRating(0);
  
  setTimeout(() => setSubmitted(false), 5000);
};
```

---

## 📝 Important Files Created

1. ✅ **`server/vercel.json`** - Backend deployment config
2. ✅ **`ProductDetail.jsx`** - Updated with environment variable support
3. ✅ **`.env.example`** - Environment variable template

---

## 🐛 Troubleshooting

### Issue: "Failed to submit review" in production

**Check:**
1. Is backend deployed? ✅
2. Is `VITE_API_URL` set in Vercel? ✅
3. Did you rebuild frontend after setting env var? ✅

### Issue: CORS errors

**Solution:** Backend already has CORS enabled in `server.js`:
```javascript
app.use(cors());
```

### Issue: Environment variables not working

**Solution:**
1. Go to Vercel project settings
2. Add environment variables
3. **Redeploy** the project (important!)

---

## 🎯 Quick Checklist

### Before Deploying:

- [ ] Backend code is in `server` folder
- [ ] `server/vercel.json` exists
- [ ] Email credentials are ready (for backend)
- [ ] Frontend uses environment variable for API URL

### After Deploying Backend:

- [ ] Copy backend URL
- [ ] Add `VITE_API_URL` to frontend Vercel settings
- [ ] Redeploy frontend

### Testing:

- [ ] Frontend loads correctly
- [ ] Images display properly
- [ ] Review submission works
- [ ] Order form works (if using)

---

## 💡 Pro Tips

1. **Use GitHub**: Connect your repo to Vercel for automatic deployments
2. **Environment Variables**: Always use env vars for sensitive data
3. **Test Locally First**: Make sure everything works with `npm run dev`
4. **Check Logs**: Use Vercel's function logs to debug issues

---

## 📞 Need Help?

### Common Commands:

**Test backend locally:**
```bash
cd server
node server.js
```

**Test frontend locally:**
```bash
npm run dev
```

**Build frontend:**
```bash
npm run build
```

**Preview production build:**
```bash
npm run preview
```

---

## 🔗 Useful Links

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
- [Gmail App Passwords](https://support.google.com/accounts/answer/185833)

---

**Last Updated**: October 27, 2025

**Status**: ✅ Ready for deployment!
