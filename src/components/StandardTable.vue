<template>
    <div style="overflow-x: scroll; font-size: 14px">
        <table>
            <th :style='
                    "width: " +             "50px" +                                    ";" +
                    "text-align: " +        "center" +                                  ";" +
                    "color: " +             "white" +                                   ";" +
                    "background-color: " +  "rgb(150,150,150)" +                        ";" +
                    "border:" +             "1px solid rgba(210,210,210)" +             ";" +
                    "padding: " +           "8px" +                                     ";"
                '
            >
            </th>
            <th v-for='(col, colIndex) in columns.filter(item => 1 == 1)' 
                :key='colIndex + "column"' 
                :style='
                    "width: " +             col.width +                                 ";" +
                    "text-align: " +        col.textAlignment +                         ";" +
                    "color: " +             "white" +                                   ";" +
                    "background-color: " +  "rgb(150,150,150)" +                        ";" +
                    "border:" +             "1px solid rgba(210,210,210)" +             ";" +
                    "padding: " +           "8px" +                                     ";"
                '
            >
                {{col.header}}
            </th>
            <tr v-for='(row, rowIndex) in rows.filter(row => 1 == 1)'
                @click='processClick(rowIndex)' 
                :key='colIndex + rowIndex + "row"'
                :style='
                    "background-color: " +  (rowIndex % 2 == 0 ? "white" : "rgba(230,230,230)") +           ";"
                '
            >
                <td :style='"border: 1px solid rgba(210,210,210); padding: 8px"'>{{rowIndex + 1}}</td>
                <td v-for='(field, fieldIndex) in Object.keys(row).filter(field => !hiddenFields.includes(field))'
                    :key='colIndex + rowIndex + fieldIndex + "field"'
                    :title='row[field]'
                    :style='
                        "border: 1px solid rgba(210,210,210); " +
                        "padding: 8px; " +
                        "text-overflow: ellipsis; " + 
                        "overflow: hidden; " + 
                        "white-space: nowrap; " + 
                        "max-width: " + "200px" + ";"
                    '
                >
                    {{row[field]}}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>

// import ContactCard from "@/components/ContactCard.vue";
// import NavbarContact from "@/components/Navbars/Contact.vue";
var xyz = [
    {
        "isCollaboration": "",
        "frontendRepoLink": "https://bitbucket.org/mfarmer5102/portamonete_api/src/master/",
        "description": "A personal financial management tool.",
        "language": "JavaScript",
        "title": "Portamonete",
        "supportStatus": "active",
        "githubLink": "",
        "publishDate": "2020-06-10",
        "frontendLink": "http://ec2-18-223-119-126.us-east-2.compute.amazonaws.com/",
        "isFeatured": true,
        "deployedLink": "http://ec2-18-223-119-126.us-east-2.compute.amazonaws.com/",
        "backendLink": "http://ec2-18-223-119-126.us-east-2.compute.amazonaws.com/",
        "applicationType": "unified",
        "backendRepoLink": "https://bitbucket.org/mfarmer5102/portamonete_client/src/master/"
    },
    {
        "isCollaboration": "",
        "frontendRepoLink": "https://github.com/cafeamericano/keywordFactory",
        "description": "An Angular app designed for managing keywords available to my App Gallery Lite and App Factory applications.",
        "language": "JavaScript",
        "title": "Keyword Factory",
        "supportStatus": "active",
        "githubLink": "https://github.com/cafeamericano/keywordFactory",
        "publishDate": "2020-04-10",
        "frontendLink": "https://cafeamericano.github.io/keywordFactory",
        "isFeatured": true,
        "deployedLink": "https://cafeamericano.github.io/keywordFactory",
        "backendLink": "https://central-api-go.appspot.com/",
        "applicationType": "client-side",
        "backendRepoLink": "https://github.com/cafeamericano/keywordFactory-api"
    },
        {
        "isCollaboration": "",
        "frontendRepoLink": "https://bitbucket.org/mfarmer5102/portamonete_api/src/master/",
        "description": "A personal financial management tool.",
        "language": "JavaScript",
        "title": "Portamonete",
        "supportStatus": "active",
        "githubLink": "",
        "publishDate": "2020-06-10",
        "frontendLink": "http://ec2-18-223-119-126.us-east-2.compute.amazonaws.com/",
        "isFeatured": true,
        "deployedLink": "http://ec2-18-223-119-126.us-east-2.compute.amazonaws.com/",
        "backendLink": "http://ec2-18-223-119-126.us-east-2.compute.amazonaws.com/",
        "applicationType": "unified",
        "backendRepoLink": "https://bitbucket.org/mfarmer5102/portamonete_client/src/master/"
    },
    {
        "isCollaboration": "",
        "frontendRepoLink": "https://github.com/cafeamericano/keywordFactory",
        "description": "An Angular app designed for managing keywords available to my App Gallery Lite and App Factory applications.",
        "language": "JavaScript",
        "title": "Keyword Factory",
        "supportStatus": "active",
        "githubLink": "https://github.com/cafeamericano/keywordFactory",
        "publishDate": "2020-04-10",
        "frontendLink": "https://cafeamericano.github.io/keywordFactory",
        "isFeatured": true,
        "deployedLink": "https://cafeamericano.github.io/keywordFactory",
        "backendLink": "https://central-api-go.appspot.com/",
        "applicationType": "client-side",
        "backendRepoLink": "https://github.com/cafeamericano/keywordFactory-api"
    },
        {
        "isCollaboration": "",
        "frontendRepoLink": "https://bitbucket.org/mfarmer5102/portamonete_api/src/master/",
        "description": "A personal financial management tool.",
        "language": "JavaScript",
        "title": "Portamonete",
        "supportStatus": "active",
        "githubLink": "",
        "publishDate": "2020-06-10",
        "frontendLink": "http://ec2-18-223-119-126.us-east-2.compute.amazonaws.com/",
        "isFeatured": true,
        "deployedLink": "http://ec2-18-223-119-126.us-east-2.compute.amazonaws.com/",
        "backendLink": "http://ec2-18-223-119-126.us-east-2.compute.amazonaws.com/",
        "applicationType": "unified",
        "backendRepoLink": "https://bitbucket.org/mfarmer5102/portamonete_client/src/master/"
    },
    {
        "isCollaboration": "",
        "frontendRepoLink": "https://github.com/cafeamericano/keywordFactory",
        "description": "An Angular app designed for managing keywords available to my App Gallery Lite and App Factory applications.",
        "language": "JavaScript",
        "title": "Keyword Factory",
        "supportStatus": "active",
        "githubLink": "https://github.com/cafeamericano/keywordFactory",
        "publishDate": "2020-04-10",
        "frontendLink": "https://cafeamericano.github.io/keywordFactory",
        "isFeatured": true,
        "deployedLink": "https://cafeamericano.github.io/keywordFactory",
        "backendLink": "https://central-api-go.appspot.com/",
        "applicationType": "client-side",
        "backendRepoLink": "https://github.com/cafeamericano/keywordFactory-api"
    }
]

export default {
    name: 'StandardTable',
    props: [],
    components: {
        // ContactCard,
        // NavbarContact
    },
    methods: {
        processClick: function(id) {
            alert(id)
        }
    },
    data: function () {
        return {
            columns: [
                {
                    header: 'Title',
                    width: '200px',
                    textAlignment: 'Left'
                },
                {
                    header: 'Publish Date',
                    width: '150px',
                    textAlignment: 'Left'
                },
                {
                    header: 'Title',
                    width: '300px',
                    textAlignment: 'Left'
                },
                {
                    header: 'Publish Date',
                    width: '200px',
                    textAlignment: 'Left'
                },
                                {
                    header: 'Title',
                    width: '200px',
                    textAlignment: 'Left'
                },
                {
                    header: 'Publish Date',
                    width: '150px',
                    textAlignment: 'Left'
                },
                {
                    header: 'Title',
                    width: '300px',
                    textAlignment: 'Left'
                },
                {
                    header: 'Publish Date',
                    width: '200px',
                    textAlignment: 'Left'
                },
                                {
                    header: 'Title',
                    width: '200px',
                    textAlignment: 'Left'
                },
                {
                    header: 'Publish Date',
                    width: '150px',
                    textAlignment: 'Left'
                },
                                {
                    header: 'Title',
                    width: '300px',
                    textAlignment: 'Left'
                },
                {
                    header: 'Publish Date',
                    width: '200px',
                    textAlignment: 'Left'
                },
                                {
                    header: 'Title',
                    width: '200px',
                    textAlignment: 'Left'
                },
                {
                    header: 'Publish Date',
                    width: '150px',
                    textAlignment: 'Left'
                }
            ],
            rows: xyz,
            hiddenFields: ['id', 'uuid']
        }
    }
}

</script>