interface Popup {
  message: string;
  ok: boolean;
}

const NotAuthorized = {
  message: "Not Authorized",
  ok: false,
}

const Success = {
  message: "Update Successful",
  ok: true,
}

function Err(e: Error): Popup {
  return {
    message: e.message,
    ok: false,
  };
}

export default Popup;

export {
  NotAuthorized,
  Success,
  Popup,
  Err,
};
