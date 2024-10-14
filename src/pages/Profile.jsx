import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import Input from "../components/Input/Input";
import useIcons from "../hooks/useIcons";
import useProfile from "../hooks/useProfile";

const Profile = () => {
  const { submit, username, setUsername, password, setPassword } = useProfile();
  const { FaEdit } = useIcons();

  return (
    <>
      <BreadCrumb title={"Profile"} />
      <div className="paddingX py-5 bg-slate-100">
        <div className="bg-white flex flex-col gap-10 max-w-4xl mx-auto p-2 rounded">
          <div className="capitalize flex items-center justify-between">
            <h3 className="sm:text-3xl capitalize font-semibold">
              update profile
            </h3>
            <FaEdit size={30} />
          </div>
          <div>
            <form onSubmit={submit} className="flex  gap-5 flex-col w-full">
              <Input
                type={"text"}
                label={"username"}
                value={username}
                name={"username"}
                onchange={(e) => setUsername(e.target.value)}
              />
              <Input
                type={"text"}
                label={"password"}
                value={password}
                name={"password"}
                onchange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="bg-green-500 p-2 text-white rounded"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
