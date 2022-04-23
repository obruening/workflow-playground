import { Location, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./authContext";
import { User } from "./model/user/user";
import ErrorBox from "./page/task/ErrorBox";
import useFetch from "./useFetch";
import UserList from "./UserList";

/*
interface Group {
  name: string;
}

interface User {
  id: string;
  firstname: string;
  lastname: string;
  groupList: Array<Group>;
}
*/

function getPathname(location: Location): string | undefined {

  const s: any = location.state;
  if (s.from) {
    const from: any = s.from;
    if (from.pathname) {
      return from.pathname;
    }
  }

  return undefined;
}

function LoginPage() {

  let navigate = useNavigate();
  let location = useLocation();
  console.log(location);
  let auth = useAuth();

  //const [userList, setUserList] = useState<Array<User>>([]);

  //https://github.com/axios/axios#handling-errors

  const { error, isPending, data: userList } = useFetch<Array<User>>('/api/users', auth.user?.id || '');

  //setUserListProps({userListKey: userList});
  //let from = location.state?.from?.pathname || "/";
  let from = getPathname(location) || "/";

  function callbackFunc(user: User) {
    console.log('i was called ');
    console.log(user);


    auth.signin(user, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(from, { replace: true });
    });
  }

  /*
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let username = formData.get("username") as string;

    auth.signin(username, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(from, { replace: true });
    });
  }
  */

  return (
    <>
      {error &&
        <ErrorBox errorMessageKey={JSON.stringify(error, null, 4)} />
      }
      {isPending &&
        <div>Loading...</div>
      }
      {userList &&
        <div className="block" style={{ "marginTop": "20px" }}>
          <UserList userListKey={userList} callBackFuncKey={callbackFunc} />
        </div>
      }
    </>
  );
}

export default LoginPage;