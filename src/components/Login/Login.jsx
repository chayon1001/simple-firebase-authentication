import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../Firebase/firebase.init";
import { useState } from "react";


const Login = () => {

    const [user, setUser] = useState(null)

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handelGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result)
                setUser(result.user)
            })
            .catch(error => {
                console.log(error)
                setUser(null)
            })
    }

    const handelGoogleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null)

            })
            .catch(error => {
                console.log(error)
            })

    }

    const handelGithubLogin = ()=>{
        signInWithPopup(auth, githubProvider)
        .then((result)=>{
            console.log(result.user);
            setUser(result.user);
        })
        .catch(error=>{
            console.log(error);
        })
       
    }

    return (
        <div>
            {/* <button onClick={handelGoogleLogin}>Login with google</button>
            <button onClick={handelGoogleSignOut}>Sign Out</button> */}

            {
                user ? <button onClick={handelGoogleSignOut}>Sign Out</button> :
                    <>

                        <button onClick={handelGoogleLogin}>Login with google</button>

                        <button onClick={handelGithubLogin}>Login with github</button>
                    </>
            }


            {
                user && <div>
                    <h3>{user.displayName}</h3>
                    <p>{user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;