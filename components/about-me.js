import profile from '../public/images/profile.jpg';

export default function AboutMe() {
    return (
        <div>
            <table>
                <tr>
                    <div>
                        <img src={profile} alt="Profile" />;
                    </div>
                    <div>
                        <h1>Justin Dhillon</h1>
                        <ul>
                            <li>👋 Hi, I’m @justindhillon</li>
                            <li>🎓 University of British Columbia 2028</li>
                            <li>🧑‍💻 Computer Science Nerd</li>
                            <li>🐧Linux Enthusiast</li>
                            <li>🇨🇦 Vancouver, Canada</li>
                            <li>📫 justin.singh.dhillon@gmail.com</li>
                        </ul>
                    </div>
                </tr>
            </table>
        </div>
    )
}
