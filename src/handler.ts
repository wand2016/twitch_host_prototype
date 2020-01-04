import container from "@app/inversify.config";

export const entrypoint = async () => {

  container; // TODO: get service class

  return {
    statusCode: 200,
  };
};
