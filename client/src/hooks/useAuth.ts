import { useAppSelector } from "./useAppSelector";

export function useAuth() {
  const { email, token, id, avatar, username } = useAppSelector(
    (state) => state.user
  );

  return {
    isAuth: !!email,
    email,
    token,
    id,
    username,
    avatar,
  };
}
