import profile from '../public/images/profile.jpg';
import Image from 'next/image';

export default function AboutMe() {
    return (
        <div>
            <br />
            <h1 style={{fontSize: "3em", textAlign: 'center', color: "#2596be"}}>About Me</h1>
            <br />
            <table style={{background:"#f1f1f1"}} class="about-me">
                <br />
                <tr>
                    <td>
                        <Image class="image" src={profile} alt="Profile" />
                    </td>
                    <td style={{textAlign:"left"}}>
                        <h1 style={{color:"#2596be"}}>Justin Dhillon</h1>
                        <br />
                        <ul>
                            <li>🎓 University of British Columbia CPSC 2028</li>
                            <li>🧑‍💻 Computer Science Nerd</li>
                            <li>🐧Linux Enthusiast</li>
                            <li>🇨🇦 Vancouver, Canada</li>
                            <br />
                            <li><a style={{color:"#2596be"}} href='https://github.com/justindhillon/place-vanier-line'>&lt;/&gt; Source Code</a></li>
                            <li><a style={{color:"#2596be"}} href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=justin.singh.dhillon@gmail.com'>📫 Email</a></li>
                            <li><a style={{color:"#2596be"}} href='https://twitter.com/justindhillon0'>🐦 Twitter</a></li>
                        </ul>
                    </td>
                </tr>
                <br />
            </table>
            <div style={{textAlign:"center"}}>
                <br /><br />
                <p>Back to <a href="https://placevanierline.vercel.app/"><span style={{color:"#2596be"}}>Graph</span></a></p>
                <br /><br />
            </div>
        </div>
    )
}
