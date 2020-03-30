module.exports = Object.freeze({
  TOKEN: '1054372305:AAF91XzIg9de-tLfeD05U6CToKuA01psE-w',
  ARIA_SECRET: 'pronoob',
  ARIA_DOWNLOAD_LOCATION: '/home/user/path/to/download/dir',
  ARIA_DOWNLOAD_LOCATION_ROOT: '/', //The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: [], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: [], // Files/top level directories with these substrings in the filename won't be downloaded
  ARIA_PORT: 8210, // Port for aria2c RPC server, if you change this here, make sure to update aria.sh as well
  INDEX_DOMAIN: 'https://its.pronoobgdrivemoviess.workers.dev/Pronoobcloud/', //Get it from here https://gdindex-code-builder.glitch.me/
  GDRIVE_PARENT_DIR_ID: '13z5zCp5XR-XdyT50HdJDr84IzdroF-lE',
  SUDO_USERS: [882130858],	// Telegram user IDs. These users can use the bot in any chat.
  AUTHORIZED_CHATS: [-291164914],	// Telegram chat IDs. Anyone in these chats can use the bot.
  STATUS_UPDATE_INTERVAL_MS: 5000, // A smaller number will update faster, but might cause rate limiting
  DRIVE_FILE_PRIVATE: {
    ENABLED: false,
    EMAILS: ['someMail@gmail.com', 'someOtherMail@gmail.com']
  },
  DOWNLOAD_NOTIFY_TARGET: {  // Information about the web service to notify on download completion.
    enabled: false,   // Set this to true to use the notify functionality
    host: 'hostname.domain',
    port: 80,
    path: '/botNotify'
  },
  COMMANDS_USE_BOT_NAME: {
    ENABLED: true,  // If true, all commands except '/list' has to have the bot username after the command
    NAME: "@eviluploader_bot"
  },
  IS_TEAM_DRIVE: true
});
