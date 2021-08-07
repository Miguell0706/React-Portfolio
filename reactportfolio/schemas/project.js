export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",

        },
        {
            name:"description",
            type:"string"
        },
        {
            name:"projectType",
            title:"Project type",
            type: "string",
            options: {
                list: [
                    { value: "personal", title: "Personal"},
                    { value: "client", title: "Client"},
                    { value: "school", title: "School"},

                ],
            },

        },
        {
            name: "appLink",
            type: "url",
        },
        {
            name: "githubLink",
            type: "url",
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
    ],
};