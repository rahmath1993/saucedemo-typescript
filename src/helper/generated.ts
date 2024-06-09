class Generated {
    public getEnv(envName: string) {
        let value = <string>process.env[envName];
        if (value === undefined || value === "") {
          throw new Error(`'${envName}' not defined / have no value in .env file!`);
        }
        return value;
      }
}
export default new Generated;