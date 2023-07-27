import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineBook,
  AiOutlineForm,
  AiFillPicture,
  AiOutlineEnvironment,
  AiOutlineUser,
  AiOutlineContainer,
} from "react-icons/ai";

const IconsClose = () => <AiOutlineClose className="w-10 h-10"/>;

const IconsInfo = () => <AiOutlineBook />;

const IconsForm = () => <AiOutlineForm />;

const IconsImage = () => <AiFillPicture />;

const IconsLocation = () => <AiOutlineEnvironment />;

const IconsUser = () => <AiOutlineUser />;

const IconsMessage = () => <AiOutlineContainer />;

const IconsMenu = () => <AiOutlineMenu className="w-10 h-10" />;

export {
  IconsInfo,
  IconsForm,
  IconsImage,
  IconsLocation,
  IconsUser,
  IconsClose,
  IconsMessage,
  IconsMenu,
};
