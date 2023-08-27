namespace BuildMart.Models
{
   
        public class CompanyRegistration
        {
            public string company_name { get; set; }
            public string email { get; set; }
            public string contactno { get; set; }
            public string username { get; set; }
            public string password { get; set; }
            public string c_password { get; set; }
            public int quesid { get; set; }
            public string qanswer { get; set; }
            public int city { get; set; }
            public int area { get; set; }
            public string add_line { get; set; }

        public CompanyRegistration(string company_name, string email, string contactno, string username, string password, int quesid, string qanswer, int city, int area, string add_line)
        {
            this.company_name = company_name;
            this.email = email;
            this.contactno = contactno;
            this.username = username;
            this.password = password;
            this.quesid = quesid;
            this.qanswer = qanswer;
            this.city = city;
            this.area = area;
            this.add_line = add_line;
        }

        public CompanyRegistration()
        {
        }
    }
    }


