# ⚡ Quick Deployment Guide

## 🎯 Deploy in 2 Steps

### Step 1: Deploy Backend

1. **Create new Vercel project**
2. **Set Root Directory**: `server`
3. **Add Environment Variables**:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```
4. **Deploy** → Copy the URL (e.g., `https://your-backend.vercel.app`)

---

### Step 2: Deploy Frontend

1. **Create new Vercel project**
2. **Set Root Directory**: `/` (root)
3. **Add Environment Variable**:
   ```
   VITE_API_URL=https://your-backend.vercel.app
   ```
   ⚠️ **Use your actual backend URL from Step 1!**
4. **Deploy** → Done! ✅

---

## 🧪 Test It

1. Visit your deployed website
2. Go to any product page
3. Submit a review
4. ✅ Should work!

---

## 📁 Project Structure

```
Global_Stitches/
├── server/              ← Deploy this as Backend
│   ├── server.js
│   └── vercel.json     ✅ Already created
│
├── src/                 ← Part of Frontend
├── public/              ← Part of Frontend
├── package.json         ← Part of Frontend
└── vite.config.js       ← Part of Frontend
```

---

## 🔑 Key Points

✅ **Two separate Vercel projects** (Backend + Frontend)  
✅ **Backend URL** must be set in frontend env vars  
✅ **Redeploy frontend** after setting env vars  
✅ **Development** still uses `localhost:5000` automatically  

---

## 💡 Alternative: Skip Backend (Temporary)

If you don't want to deploy backend right now:

1. Remove the review submission feature
2. Deploy only frontend
3. Add backend later when needed

---

**Need detailed instructions?** See `VERCEL_DEPLOYMENT.md`
