namespace BuildMart.Models
{
  
        public class CustomerRegistration
        {
            public string fname { get; set; }
            public string lname { get; set; }
            public string email { get; set; }
            public string cno { get; set; }
            public string uname { get; set; }
            public string pwd { get; set; }
            public string cpwd { get; set; }
            public int qid { get; set; }
            public string ans { get; set; }

            public CustomerRegistration(string fname, string lname, string email, string cno, string uname, string pwd,
                string cpwd, int qid, string ans)
            {
                this.fname = fname;
                this.lname = lname;
                this.email = email;
                this.cno = cno;
                this.uname = uname;
                this.pwd = pwd;
                this.cpwd = cpwd;
                this.qid = qid;
                this.ans = ans;
            }

            public CustomerRegistration()
            {
            }

            public override string ToString()
            {
                return $"CustomerRegistration [fname={fname}, lname={lname}, email={email}, cno={cno}, uname={uname}, " +
                       $"pwd={pwd}, cpwd={cpwd}, qid={qid}, ans={ans}]";
            }
        }
    }


