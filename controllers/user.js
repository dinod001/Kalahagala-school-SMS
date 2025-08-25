import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import User from '../schema/user.js'

// Generate JWT token helper
const generateJwtToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY, { expiresIn: "30d" })
}

// Register Controller
export const register = async (req, res) => {
  let { userName, password } = req.body

  if (!userName || !password) {
    return res.status(400).json({ success: false, message: 'User details required' })
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ userName })
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'User already exists' })
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    password = await bcrypt.hash(password, salt)

    // Create user
    const user = await User.create({ userName, password })

    // Generate token
    const token = generateJwtToken(user._id)

    return res.status(200).json({
      success: true,
      message: 'Registration success',
      token,
      user: { id: user._id, userName: user.userName }
    })
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message })
  }
}

// Login Controller
export const login = async (req, res) => {
  const { userName, password } = req.body

  if (!userName || !password) {
    return res.status(400).json({ success: false, message: 'User details required' })
  }

  try {
    const user = await User.findOne({ userName })
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' })
    }

    // Generate token
    const token = generateJwtToken(user._id)

    return res.status(200).json({
      success: true,
      message: 'Login success',
      token,
      user: { id: user._id, userName: user.userName }
    })
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message })
  }
}
