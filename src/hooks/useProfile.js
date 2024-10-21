import {useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {fetchProfile,changeStatus} from '../reducer/ProfileReducer'
import {editProfile} from '../services/ProfileService'
import {useNavigate} from 'react-router-dom'
import { message } from "antd";

const useProfile = () => {
    const navigate = useNavigate()
    // redux
  const dispatch = useDispatch();
  const { profileItems, error, status } = useSelector((state) => state.foodBud.profile);
    const [isLoading, setIsLoading] = useState(false);
    const [formProfile, setFormProfile] = useState(false);
    const onUpdateProfile = (value) => {
      const formData = new FormData()
      formData.append('first_name', value.firstName)
      formData.append('last_name', value.lastName)
      formData.append('age', value.age)
      formData.append('address', value.address)
      formData.append('profileImage', value.photo.file)
      setIsLoading(true);
      editProfile(formData)
        .then((res) => {
          if (res.status == 200) {
            message.success("Update profile successfully");
            setIsLoading(false);
            dispatch(changeStatus())
            setFormProfile(false)
          }
        })
        .catch((error) => {
          message.error(error.message);
          setIsLoading(false);
        });
    };
    const onChangeCover = ({file,onSuccess,onError}) => {
      const formData = new FormData();
      formData.append('coverImage', file);
      editProfile(formData).then((res) => {
        if(res.status == 200) {
          dispatch(changeStatus())
          onSuccess(res.data)
          message.success("Change cover successfully")
        }
      }).catch((error) => {
        onError(error)
        message.error(error);
      })
    }
    useEffect(() => {
      if(status == 'idle') {
        dispatch(fetchProfile())
      }
    },[status])

    return {
      onUpdateProfile,
      isLoading,
      profileItems,
      setFormProfile,
      formProfile,
      onChangeCover
    };
  };
  
  export default useProfile;