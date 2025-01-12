import { AiOutlineGoogle} from "react-icons/ai"
import { IoLogoGithub,IoLogoInstagram,IoLogoTwitter } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import qZone1 from '../../assets/qZone1.jpg';
import qZone2 from '../../assets/qZone2.jpg';
import qZone3 from '../../assets/qZone3.jpg';


const RightSideNav = () => {
    return (
        <div>

            {/* Login With */}
            <div className="p-4 mb-6">
                <h2 className="text-3xl mb-4">Login With</h2>

                <button className="btn btn-outline w-full mb-2">
                <AiOutlineGoogle />
                    Login With Google
                </button>
                <button className="btn btn-outline w-full">
                <IoLogoGithub/>
                   Login With Github
                </button>
            </div>

            {/* Find Us On */}

            <div className="p-4 mb-6">
                <h2 className="text-3xl mb-4">Find Us On</h2>
                <a className="p-4 flex text-lg items-center border border-cyan-400 rounded-t-lg " href="">
                <FaFacebookSquare className="mr-3"></FaFacebookSquare>Facebook
                </a>
                <a className="p-4 flex text-lg items-center border border-cyan-400 border-x" href="">
                <IoLogoTwitter  className="mr-3"></IoLogoTwitter>Twitter
                </a>
                <a className="p-4 flex text-lg items-center border border-cyan-400 rounded-b-lg" href="">
                <IoLogoInstagram  className="mr-3"></IoLogoInstagram>Instagram
                </a>
            </div>

            {/* Q-Zone */}

            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl mb-4">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;