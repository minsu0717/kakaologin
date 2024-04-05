const { appDataSource } = require("./dataSource");

const getUserByEmail = async (email) => {
  const [user] = await appDataSource.query(
    `
    SELECT
    id,
    email
    FROM
    users
    WHERE email = ?
    `,
    [email]
  );
  return user;
};
const createUser = async (nickname, profileImage, email) => {
  await appDataSource.query(
    `
    INSERT INTO users(
      name,
      nickname,
      profile_image,
      email
      )
    VALUES (
      ?, ?, ?, ?
    );
    `,
    [nickname, nickname, profileImage, email]
  );
};

module.exports = { getUserByEmail, createUser };
