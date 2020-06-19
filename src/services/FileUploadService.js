import http from "../http-common";

const upload = (file, onUploadProgress) => {
  let formData = new FormData();
console.log("formData", formData)
  formData.append("file", file);
  console.log("++++", file)
    return http.post("/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

const getFiles = () => {
  return http.get("/files");
};

export default {
  upload,
  getFiles,
};
