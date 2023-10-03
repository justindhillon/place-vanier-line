import profile from '../public/images/profile.jpg';
import Image from 'next/image';

export default function AboutMe() {
    return (
        <div>
            <br />
            <table style={{background:"#f1f1f1"}}>
                <tr>
                    <td>
                        <Image src={profile} alt="Profile" />;
                    </td>
                    <td>
                        <h1 style={{color:"#2596be"}}>Justin Dhillon</h1>
                        <ul>
                            <li>🎓 University of British Columbia CPSC 2028</li>
                            <li>🧑‍💻 Computer Science Nerd</li>
                            <li>🐧Linux Enthusiast</li>
                            <li>🇨🇦 Vancouver, Canada</li>
                            <li><a href='https://github.com/justindhillon/place-vanier-line'>&lt;/&gt; Source Code</a></li>
                            <li><a href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=justin.singh.dhillon@gmail.com'>📫 Email</a></li>
                            <li><a href='https://twitter.com/justindhillon0'>Twitter</a></li>
                        </ul>
                    </td>
                </tr>
            </table>
            <div style={{textAlign:"center"}}>
                <br /><br />
                <p>Back to <a href="https://placevanierline.vercel.app/"><span style={{color:"#2596be"}}>Graph</span></a></p>
                <br /><br />
            </div>
        </div>
    )
}
