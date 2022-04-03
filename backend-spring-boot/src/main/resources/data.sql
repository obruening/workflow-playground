insert into act_id_group (id_, name_) values ('access', 'access');
insert into act_id_group (id_, name_) values ('clearance', 'clearance');

insert into act_id_user (id_, first_, last_) values ('anna', 'Anna', 'Alpha');
insert into act_id_user (id_, first_, last_) values ('joe', 'Joe', 'Johnson');

insert into act_id_membership (user_id_, group_id_) values ('anna', 'access');
insert into act_id_membership (user_id_, group_id_) values ('anna', 'clearance');

insert into act_id_membership (user_id_, group_id_) values ('joe', 'access');

