import express from "express"
import passport from "passport"
import isLoggedIn from "../../middlewares/isAuthenticated"
const router = express.Router()

// Login
router.get('/login', (req, res) => {
    res.render('login')
})

// Logout
router.get('/logout', (req, res) => {
    res.send('logging out')
})

// Auth with google
router.get('/google', passport.authenticate("google", { scope: ["email", "profile"] }))

router.get('/protected'  ,(req, res) => {
    res.send(req.user)
})

router.get('/google/failure', (req, res) => {
    res.send('fail')
})

router.get(
    "/google/callback",
    passport.authenticate("google", {
        successRedirect: "/api/v1/auth/protected",
        failureRedirect: "/api/v1/auth/google/failure",
    })
);

export default router