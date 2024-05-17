﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace casino_testapp.Models
{
    public class AuthUtility
    {
        private readonly string username;
        private readonly string password;
        public AuthUtility(string username, string password)
        {
            this.username = username;
            this.password = password;
        }
        public Dictionary<string, string> getAuth()
        {

            return new Dictionary<string, string> {
                { "username", this.username },
                { "password", this.password }
            };
        }

        public Dictionary<string, string> validate(string session, string key)
        {
            return new Dictionary<string, string> {
                { "session", session },
                { "key", key },
                { "username", this.username },
                { "password", this.password }
            };
        }
    }

    public class SessionResponse
    {
        public int errCode { get; set; }
        public string session { get; set; }
        public string key { get; set; }
    }

    public class ValidateReponse
    {
        public int errCode { get; set; }
        public string message { get; set; }
        public UserData data { get; set; }
    }

    public class UserData
    {
        public string id { get; set; }
        public string network { get; set; }
        public string tag { get; set; }
        public string username { get; set; }
        public int percentage { get; set; }
        public string referrer { get; set; }
        public string created { get; set; }
        public string auth { get; set; }
        public string key { get; set; }
    }
}