import React from 'react';
//import * as FaIcons from 'react-icons/fa';
//import * as AiIcons from 'react-icons/ai';
//import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SideData = [
    
    {
        title:'Virtual Machines Documentation',
        path:'/',
    },


    {
        title:'Overview',
        path:'',
       
        iconClosed:<RiIcons.RiArrowDropDownLine/>,
        iconOpened:<RiIcons.RiArrowDropUpLine/>,
        subNav:[
            {
                title:'About Linux Virtual Machines',
                path:'/overview/aboutlinux',
               
            },

            {
                title:'About Windows Virtual Machines',
                path:'/overview/aboutwin',
               
            }
        ]
    },

    {
        title:'Quickstarts',
        path:'',
       
        iconClosed:<RiIcons.RiArrowDropDownLine/>,
        iconOpened:<RiIcons.RiArrowDropUpLine/>,
        subNav:[
            {
                title:'Create a Linux VM',
                path:'/quickstart/linuxVM',
               
            },

            {
                title:'Create a Windows VM',
                path:'/quickstart/windowsVM',
               
            }
        ]
    },

    {
        title:'Tutorials',
        path:'/tutorials',
       
        iconClosed:<RiIcons.RiArrowDropDownLine/>,
        iconOpened:<RiIcons.RiArrowDropUpLine/>,
        subNav:[
            {
                title:'Linux',
                path:'/tutorials/linux',
               
            },

            {
                title:'Windows',
                path:'/tutorials/Windows',
               
            }
        ]
    },

    {
        title:'Develop',
        path:'/develop',
       
        iconClosed:<RiIcons.RiArrowDropDownLine/>,
        iconOpened:<RiIcons.RiArrowDropUpLine/>,
        subNav:[
            {
                title:'REST API',
                path:'/develop/restapi',
               
            },

            {
                title:'Python',
                path:'/develop/python',
               
            },

            {
                title:'.NET',
                path:'/develop/net',
               
            },

            {
                title:'Java',
                path:'/develop/java',
               
            },

            {
                title:'Go',
                path:'/develop/go',
               
            },
        ]
    },

    {
        title:'Workloads',
        path:'/workloads',
       
        iconClosed:<RiIcons.RiArrowDropDownLine/>,
        iconOpened:<RiIcons.RiArrowDropUpLine/>,
        subNav:[
            {
                title:'RedHat',
                path:'/workloads/redhat',
               
            },

            {
                title:'Cloud Foundry',
                path:'/workloads/cloud',
               
            },

            {
                title:'OpenShift',
                path:'/workloads/openshift',
               
            },

            {
                title:'SAP on Azure',
                path:'/workloads/sap',
               
            },

            {
                title:'Oracle',
                path:'/workloads/oracle',
               
            },

            {
                title:'Azure for Gaming',
                path:'/workloads/azuregaming',
               
            },

            {
                title:'ElasticSearch',
                path:'/workloads/elastic',
               
            },

            {
                title:'Mainframe rehosting',
                path:'/workloads/rehosting',
               
            },
        ]
    },

    {
        title:'Instances',
        path:'/instances',
       
        iconClosed:<RiIcons.RiArrowDropDownLine/>,
        iconOpened:<RiIcons.RiArrowDropUpLine/>,
        subNav:[
            {
                title:'Sizes',
                path:'/instances/sizes',
               
            },

            {
                title:'Azure Compute Gallery',
                path:'/instances/azurecompute',
               
            },

            {
                title:'Images',
                path:'/instances/images',
               
            },

            {
                title:'Dedicated hosts',
                path:'/instances/hosts',
               
            },

            {
                title:'Azure Spot Virtual Machines',
                path:'/instances/azurespot',
               
            },

            {
                title:'Reserved instances',
                path:'/instances/reserve',
               
            },

            {
                title:'Capacity reservation',
                path:'/instances/capacity',
               
            },

            {
                title:'Create Virtual Machines',
                path:'/instances/createVM',
               
            }
        ]
    },

    {
        title:'Availability and scale',
        path:'/availability',
       
        iconClosed:<RiIcons.RiArrowDropDownLine/>,
        iconOpened:<RiIcons.RiArrowDropUpLine/>,
        subNav:[
            {
                title:'Linux',
                path:'/availability/linux',
               
            },

            {
                title:'Windows',
                path:'/availability/Windows',
               
            }
        ]
    },

    {
        title:'Disks',
        path:'/disks',
       
        iconClosed:<RiIcons.RiArrowDropDownLine/>,
        iconOpened:<RiIcons.RiArrowDropUpLine/>,
        subNav:[
            {
                title:'Linux',
                path:'/disks/linux',
               
            },

            {
                title:'Windows',
                path:'/disks/Windows',
               
            }
        ]
    },

    {
        title:'Networking',
        path:'/networking',
       
        iconClosed:<RiIcons.RiArrowDropDownLine/>,
        iconOpened:<RiIcons.RiArrowDropUpLine/>,
        subNav:[
            {
                title:'Linux',
                path:'/networking/linux',
               
            },

            {
                title:'Windows',
                path:'/networking/Windows',
               
            }
        ]
    },

    {
        title:'Security',
        path:'/security',
       
        iconClosed:<RiIcons.RiArrowDropDownLine/>,
        iconOpened:<RiIcons.RiArrowDropUpLine/>,
        subNav:[
            {
                title:'Linux',
                path:'/security/linux',
               
            },

            {
                title:'Windows',
                path:'/security/Windows',
               
            }
        ]
    },

    {
        title:'Updates and maintenance',
        path:'/updates',
       
        iconClosed:<RiIcons.RiArrowDropDownLine/>,
        iconOpened:<RiIcons.RiArrowDropUpLine/>,
        subNav:[
            {
                title:'Linux',
                path:'/updates/linux',
               
            },

            {
                title:'Windows',
                path:'/updates/Windows',
               
            }
        ]
    },

    {
        title:'Monitoring',
        path:'/monitoring',
       
        iconClosed:<RiIcons.RiArrowDropDownLine/>,
        iconOpened:<RiIcons.RiArrowDropUpLine/>,
        subNav:[
            {
                title:'Linux',
                path:'/monitoring/linux',
               
            },

            {
                title:'Windows',
                path:'/monitoring/Windows',
               
            }
        ]
    },

    {
        title:'Backup and recovery',
        path:'/backup',
       
        iconClosed:<RiIcons.RiArrowDropDownLine/>,
        iconOpened:<RiIcons.RiArrowDropUpLine/>,
        subNav:[
            {
                title:'Linux',
                path:'/backup/linux',
               
            },

            {
                title:'Windows',
                path:'/backup/Windows',
               
            }
        ]
    },

    {
        title:'Infrastructure automation',
        path:'/infrastructure',
       
        iconClosed:<RiIcons.RiArrowDropDownLine/>,
        iconOpened:<RiIcons.RiArrowDropUpLine/>,
        subNav:[
            {
                title:'Linux',
                path:'/infrastructure/linux',
               
            },

            {
                title:'Windows',
                path:'/infrastructure/Windows',
               
            }
        ]
    },

    {
        title:'Resources',
        path:'/resources',
       
        iconClosed:<RiIcons.RiArrowDropDownLine/>,
        iconOpened:<RiIcons.RiArrowDropUpLine/>,
        subNav:[
            {
                title:'Linux',
                path:'/resources/linux',
               
            },

            {
                title:'Windows',
                path:'/resources/Windows',
               
            }
        ]
    },

    {
        title:'Support and troubleshooting',
        path:'/support',
    },
]

