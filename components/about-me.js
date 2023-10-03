import profile from '../public/images/profile.jpg';
import Image from 'next/image';

export default function AboutMe() {
    console.log(fetch("https://placevanierline.vercel.app/create-sitemap"));
    return (
        <div>
            <br />
            <br />
            <div style={{ background: "#f1f1f1" }} class="about-me">
                <div>
                    <br />
                    <br />
                    <br />
                    <Image class="image" src={profile} alt="Profile" />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
                <div class="text" style={{ textAlign: "left" }}>
                    <h1 style={{ color: "#2596be" }}>Justin Dhillon</h1>
                    <br />
                    <ul>
                        <li>🎓 University of British Columbia CPSC 2028</li>
                        <li>🧑‍💻 Computer Science Nerd</li>
                        <li>🐧 Linux Enthusiast</li>
                        <li>🇨🇦 Vancouver, Canada</li>
                        <br />
                        <li><a style={{ color: "#2596be" }} href='https://github.com/justindhillon/place-vanier-line'>&lt;/&gt; Source Code</a></li>
                        <li><a style={{ color: "#2596be" }} href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=justin.singh.dhillon@gmail.com'>📫 Email</a></li>
                        <li><a style={{ color: "#2596be" }} href='https://twitter.com/justindhillon0'>🐦 Twitter</a></li>
                    </ul>
                </div>
                <br /><br />
            </div>
            <div style={{ textAlign: "center" }}>
                <br /><br />
                <p>Back to <a href="https://placevanierline.vercel.app/"><span style={{ color: "#2596be" }}>Graph</span></a></p>
                <br /><br />
            </div>
        </div>
    )
}
