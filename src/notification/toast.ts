import { toast } from 'react-toastify';

export const responceNotify = (message: string) => {
  toast.success(message, {
    theme: 'colored', 
    position: 'bottom-left',
    autoClose: 5000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })
};

export const errorNotify = (message: string) => {
  toast.error(message, {
    theme: 'colored',
    position: 'bottom-left',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })
};
