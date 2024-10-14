import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { verifyEmail } from "../rtk/slices/auth/auth";

const useVerificationEmail = () => {
  const dispatch = useDispatch();
  const { userId, token } = useParams();
  const [loading, setLoading] = useState(false);
  async function verEmail() {
    try {
      const result = await dispatch(verifyEmail({ userId, token }));
      if (!result.error) {
        setLoading(true);
      }
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  useEffect(() => {
    verEmail();
  }, []);
  return { loading, Link };
};

export default useVerificationEmail;
