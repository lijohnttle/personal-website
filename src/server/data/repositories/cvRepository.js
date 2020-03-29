const cv = {
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae orci nec velit elementum ullamcorper id at nunc. Nunc volutpat facilisis ultrices. Morbi porttitor egestas ultricies. Nunc aliquet molestie facilisis. Sed vitae bibendum eros. Nullam dapibus ex tortor, sed commodo elit suscipit at. Nullam eu ultricies lectus. Morbi aliquet laoreet consequat. Morbi dignissim varius ligula a dapibus.',
    experience: [
        {
            position: 'Job Position 3',
            employer: 'Company',
            date: '01.01.1001-01.01.1002',
            location: 'City of Lights, Neverland',
            accomplishments: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                'In quis nisi nec lorem mattis porttitor id eu est.',
                'Aenean id lectus a erat pretium suscipit.',
                'Integer nec erat et turpis tempor accumsan.',
            ],
            tools: [ 'Tool1', 'Tool2', 'Tool3' ],
            technologies: [ 'Tech1', 'Tech2', 'Tech3' ]
        },
        {
            position: 'Job Position 2',
            employer: 'Company',
            date: '01.01.1001-01.01.1002',
            location: 'City of Lights, Neverland',
            accomplishments: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                'In quis nisi nec lorem mattis porttitor id eu est.',
                'Aenean id lectus a erat pretium suscipit.',
                'Integer nec erat et turpis tempor accumsan.',
            ],
            tools: [ 'Tool1', 'Tool2', 'Tool3' ],
            technologies: [ 'Tech1', 'Tech2', 'Tech3' ]
        },
        {
            position: 'Job Position 1',
            employer: 'Company',
            date: '01.01.1001-01.01.1002',
            location: 'City of Lights, Neverland',
            accomplishments: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                'In quis nisi nec lorem mattis porttitor id eu est.',
                'Aenean id lectus a erat pretium suscipit.',
                'Integer nec erat et turpis tempor accumsan.',
            ],
            tools: [ 'Tool1', 'Tool2', 'Tool3' ],
            technologies: [ 'Tech1', 'Tech2', 'Tech3' ]
        }
    ],
    education: [
        {
            title: 'Name of the University',
            description: 'Degree, Description',
            date: '01.01.1001-01.01.1002',
            location: 'City of Lights, Neverland'
        }
    ]
};

async function getCv() {
    return await Promise.resolve(cv);
}

export default {
    getCv
};