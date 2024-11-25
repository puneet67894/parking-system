import React from 'react'
import '../Styles/SignUp.css'
export default function SignUp() {
    return (
        <div>
            <div className="container">
                <h1>SignUp</h1>
                <form>
                    <div className="form-group">
                        <label for="username">Username</label>
                        <input type="text" id="username" name="username" required/>
                    </div>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required/>
                    </div>
                    <div className="form-group">
                        <label for="phone">Phone No</label>
                        <input type="tel" id="phone" name="phone" required/>
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" required/>
                    </div>
                    <div className="form-group">
                        <label for="role">Role</label>
                        <select id="role" name="role" required>
                            <option value="user">User </option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <button type="submit">SignUp</button>
                </form>
            </div>
        </div>
    )
}