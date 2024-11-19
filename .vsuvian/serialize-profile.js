const fs = require('fs');

// Read, serialize, and write profile
const profilePath = '.vsuvian/custom.code-profile';
let profile = fs.readFileSync(`${profilePath}.json`, 'utf-8');
profile = JSON.parse(profile);

const storage = profile.globalState.storage;
for (const key in storage) {
    if (typeof storage[key] === 'object' && storage[key] !== null) {
        storage[key] = JSON.stringify(storage[key]);
    }
}
profile.globalState = JSON.stringify(profile.globalState);
profile.tasks.tasks = JSON.stringify(profile.tasks.tasks);
profile.tasks = JSON.stringify(profile.tasks);

fs.writeFileSync(profilePath, JSON.stringify(profile), 'utf-8');