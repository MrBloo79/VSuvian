const fs = require('fs');

// Read, deserialize, and write profile
const profilePath = '.vsuvian/custom.code-profile';
let profile = fs.readFileSync(profilePath, 'utf-8');
profile = JSON.parse(profile);

profile.tasks = JSON.parse(profile.tasks);
profile.tasks.tasks = JSON.parse(profile.tasks.tasks);
profile.globalState = JSON.parse(profile.globalState);
const storage = profile.globalState.storage;
for (const key in storage) {
    if (typeof storage[key] === 'string') {
        try {
            storage[key] = JSON.parse(storage[key]);
        } catch {
            // Keep as is if string is not valid JSON
        } 
    }
}

fs.writeFileSync(`${profilePath}.json`, JSON.stringify(profile, null, 4), 'utf-8');
