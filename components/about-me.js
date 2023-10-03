import profile from '../public/images/profile.jpg';

export default function AboutMe() {
    return (
        <div>
            <table>
                <tr>
                    <td>
                        <img src={profile} alt="Profile" />;
                    </td>
                    <td>
                        <h1>Justin Dhillon</h1>
                        <ul>
                            <li>🎓 University of British Columbia CPSC 2028</li>
                            <li>🧑‍💻 Computer Science Nerd</li>
                            <li>🐧Linux Enthusiast</li>
                            <li>🇨🇦 Vancouver, Canada</li>
                            <a href='https://twitter.com/justindhillon0'>Twitter</a>
                            <a href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=justin.singh.dhillon@gmail.com'>📫 Email</a>
                            <a href='https://github.com/justindhillon/place-vanier-line'>&lt/&gt Source Code</a>
                        </ul>
                    </td>
                </tr>
            </table>
        </div>
    )
}
