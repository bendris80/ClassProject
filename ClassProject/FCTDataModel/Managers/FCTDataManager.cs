using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FCTDataModel
{
    public class FCTDataManager
    {
        private PersonManager _pman;
        public PersonManager People
        {
            get
            {
                if (_pman == null)
                { _pman = new PersonManager(); }
                return _pman;
            }
        }
        private PersonManager _sman;
        public PersonManager Students
        {
            get
            {
                if (_sman == null)
                { _sman = new PersonManager(); }
                return _sman;
            }
        }
    }
}
